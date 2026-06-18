import { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock } from 'lucide-react';

export default function BookingModal({ open, onClose, title }: { open: boolean; onClose: () => void; title: string }) {
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    organization: '', 
    phone: '', 
    date: '',
    time: '',
    message: '' 
  });
  const [done, setDone] = useState(false);

  if (!open) return null;

  // Generate available time slots
  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM'
  ];

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) return;
    try {
      await fetch('https://famous.ai/api/crm/6a1f0c67e3698e04fe29ba90/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          name: form.name || undefined,
          source: 'booking-consultation',
          tags: ['booking', 'consultation', 'website-lead'],
          message: `Phone: ${form.phone}\nOrganization: ${form.organization}\nDate: ${form.date}\nTime: ${form.time}\nMessage: ${form.message}`
        }),
      });
    } catch (e) { /* ignore */ }
    setDone(true);
  };

  const close = () => {
    setDone(false);
    setForm({ name: '', email: '', organization: '', phone: '', date: '', time: '', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />
      <div className="relative w-full max-w-md rounded-3xl bg-[#0b0e1a] border border-white/10 p-7 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button onClick={close} className="absolute top-5 right-5 text-slate-400 hover:text-white"><X size={20} /></button>
        {done ? (
          <div className="text-center py-10">
            <CheckCircle2 className="mx-auto text-emerald-400 mb-4" size={48} />
            <p className="text-white font-semibold text-lg">Consultation Requested</p>
            <p className="text-slate-400 text-sm mt-1">We'll confirm your booking within 24 hours.</p>
            <button onClick={close} className="mt-6 px-6 py-2.5 rounded-full text-white font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500">Done</button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="text-emerald-400" size={24} />
              <h3 className="font-grotesk text-2xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-slate-400 text-sm mt-1">Select your preferred date and time for the consultation.</p>
            <form onSubmit={submit} className="mt-6 space-y-3">
              <input
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-400/50 outline-none"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-400/50 outline-none"
              />
              <input
                placeholder="Organization"
                value={form.organization}
                onChange={(e) => setForm({ ...form, organization: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-400/50 outline-none"
              />
              <input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-400/50 outline-none"
              />
              
              {/* Date Picker */}
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400 w-4 h-4" />
                <input
                  required
                  type="date"
                  min={today}
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-10 text-white placeholder-slate-500 focus:border-emerald-400/50 outline-none"
                />
              </div>

              {/* Time Picker */}
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400 w-4 h-4" />
                <select
                  required
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-10 text-white placeholder-slate-500 focus:border-emerald-400/50 outline-none"
                >
                  <option value="" className="bg-[#0b0e1a] text-white">Select Time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-[#0b0e1a] text-white">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                placeholder="What would you like to discuss?"
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-400/50 outline-none resize-none"
              />
              <button className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/40 transition-all">
                Request Consultation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
// import { useState } from 'react';
// import { X, CheckCircle2, Calendar } from 'lucide-react';

// export default function BookingModal({ open, onClose, title }: { open: boolean; onClose: () => void; title: string }) {
//   const [form, setForm] = useState({ name: '', email: '', organization: '', phone: '', message: '' });
//   const [done, setDone] = useState(false);

//   if (!open) return null;

//   const submit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.email) return;
//     try {
//       await fetch('https://famous.ai/api/crm/6a1f0c67e3698e04fe29ba90/subscribe', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           email: form.email,
//           name: form.name || undefined,
//           source: 'booking-consultation',
//           tags: ['booking', 'consultation', 'website-lead'],
//           message: `Phone: ${form.phone}\nOrganization: ${form.organization}\nMessage: ${form.message}`
//         }),
//       });
//     } catch (e) { /* ignore */ }
//     setDone(true);
//   };

//   const close = () => {
//     setDone(false);
//     setForm({ name: '', email: '', organization: '', phone: '', message: '' });
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//       <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />
//       <div className="relative w-full max-w-md rounded-3xl bg-[#0b0e1a] border border-white/10 p-7 shadow-2xl">
//         <button onClick={close} className="absolute top-5 right-5 text-slate-400 hover:text-white"><X size={20} /></button>
//         {done ? (
//           <div className="text-center py-10">
//             <CheckCircle2 className="mx-auto text-emerald-400 mb-4" size={48} />
//             <p className="text-white font-semibold text-lg">Consultation Requested</p>
//             <p className="text-slate-400 text-sm mt-1">We'll contact you within 24 hours to schedule your consultation.</p>
//             <button onClick={close} className="mt-6 px-6 py-2.5 rounded-full text-white font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500">Done</button>
//           </div>
//         ) : (
//           <>
//             <div className="flex items-center gap-2 mb-1">
//               <Calendar className="text-emerald-400" size={24} />
//               <h3 className="font-grotesk text-2xl font-bold text-white">{title}</h3>
//             </div>
//             <p className="text-slate-400 text-sm mt-1">Schedule a consultation to discuss your organization's needs.</p>
//             <form onSubmit={submit} className="mt-6 space-y-3">
//               <input
//                 required
//                 placeholder="Full Name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-400/50 outline-none"
//               />
//               <input
//                 required
//                 type="email"
//                 placeholder="Email Address"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-400/50 outline-none"
//               />
//               <input
//                 placeholder="Organization"
//                 value={form.organization}
//                 onChange={(e) => setForm({ ...form, organization: e.target.value })}
//                 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-400/50 outline-none"
//               />
//               <input
//                 placeholder="Phone Number"
//                 value={form.phone}
//                 onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-400/50 outline-none"
//               />
//               <textarea
//                 placeholder="What would you like to discuss?"
//                 rows={3}
//                 value={form.message}
//                 onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-emerald-400/50 outline-none resize-none"
//               />
//               <button className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 hover:shadow-lg hover:shadow-emerald-500/40 transition-all">
//                 Request Consultation
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }