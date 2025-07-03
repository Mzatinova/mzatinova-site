import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    category: string;
    image?: string;
    link?: string;
    isInternal?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    category,
    image,
    link,
    isInternal = false
}) => {
    const handleClick = () => {
        if (link) {
            if (isInternal) {
                window.location.href = link;
            } else {
                window.open(link, '_blank');
            }
        }
    };

    return (
        <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={handleClick}>
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg flex items-center justify-center">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover rounded-t-lg" />
                ) : (
                    <div className="text-4xl font-bold text-gray-400">{title.charAt(0)}</div>
                )}
            </div>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium">{category}</span>
                    {link && <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />}
                </div>
                <CardTitle className="group-hover:text-blue-600 transition-colors">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="mb-4">{description}</CardDescription>
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors"
                >
                    {isInternal ? 'Explore Platform' : 'View Project'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;