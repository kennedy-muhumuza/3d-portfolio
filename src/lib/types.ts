export interface FeedBackProps{
    index: number;
    testimonial: any;
    name: string;
    designation: string; 
    company: string;
    image: string;
  }

export  interface Mobile {
    isMobile: boolean;
  }

interface TagItems{
    name: string;
    color: string;
  }
export  interface ProjectProps{
    index: number;
    name: string;
    description: string;
    tags: TagItems[];
    image: string;
    source_code_link: string;
  }

export  interface CardProps {
    index: number;
    title: string; 
    icon: any;
  }