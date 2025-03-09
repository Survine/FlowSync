import { Link } from 'react-router-dom';

const HeroSection = () => {
    const video1Url = "https://player.vimeo.com/video/1063572267?autoplay=1&muted=1&loop=1&background=1";
    const video2Url = "https://player.vimeo.com/video/1063572844?autoplay=1&muted=1&loop=1&background=1";

    return (
        <div className='flex flex-col items-center mt-6 lg:mt-20'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
                Boost Your Workflow
                <span className='bg-clip-text bg-gradient-to-r from-orange-500 to-red-800 text-transparent'> with FlowSync!</span>
            </h1>
            <p className='mt-10 max-w-4xl text-neutral-500 text-lg text-center'>
                Flow Sync empowers you to streamline your processes
                by effortlessly synchronizing data, teams, and tools in real-time.
                Say goodbye to manual updates and hello to automated efficiency.
            </p>
            <div className='flex justify-center my-10'>
                <Link to="/signup" className='bg-gradient-to-r from-orange-500 to-orange-800 mx-3 px-4 py-3 rounded-md'>
                    Start for free
                </Link>
                <a href="https://tailwindcss.com/docs/installation/using-vite" target="_blank" rel="noopener noreferrer" className='mx-3 px-4 py-3 border rounded-md'>
                    Documentation
                </a>
            </div>
            <div className='flex flex-col md:flex-row justify-center mt-10 w-full px-4 gap-4'>
                <div className='w-full md:w-1/2 aspect-video shadow-orange-400 border border-orange-700 rounded-lg overflow-hidden'>
                    <iframe
                        src={video1Url}
                        className='w-full h-full object-cover pointer-events-none'
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        title="Video 1"
                        style={{ pointerEvents: 'none' }}
                    ></iframe>
                </div>
                <div className='w-full md:w-1/2 aspect-video shadow-orange-400 border border-orange-700 rounded-lg overflow-hidden'>
                    <iframe
                        src={video2Url}
                        className='w-full h-full object-cover pointer-events-none'
                        allow="autoplay; fullscreen"
                        allowFullScreen
                        title="Video 2"
                        style={{ pointerEvents: 'none' }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;