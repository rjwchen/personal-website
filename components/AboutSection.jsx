import Image from "next/image";

export default function AboutSection() {
    const personalData = {
        name: "Raymond",
        designation: "Master's Student",
        description: "I am a Master's student at the University of Southern California, specializing in Computer Science. I am passionate about software development and eager to learn new technologies.",
        github: "https://github.com/rjwchen",
        linkedIn: "https://www.linkedin.com/in/raymond-chen-46477a21b/",
        resume: "https://drive.google.com/file/d/1Nl3yERXOjm7R-1iG3xV20MxZuXHaO5kj/view?usp=sharing"
    };

    return (
        <div id="about" className="my-12 lg:my-16 relative">
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                ABOUT ME
                </span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="order-2 lg:order-1">
                    <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
                        Who I am?
                    </p>
                    <p className="text-gray-200 text-sm lg:text-lg">
                        {personalData.description}
                    </p>
                </div>
                <div className="flex justify-center order-1 lg:order-2">
                    <Image
                        src="/next.svg"
                        width={280}
                        height={280}
                        alt="Abu Said"
                        className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

