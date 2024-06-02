import Image from "next/image"
import {
    Button
} from "@/components/ui/button"
import {
    ArrowRight
} from "lucide-react"


const Hero = () => {
    return (
        <>
            <header className="showcase">
                <div className="flex items-center justify-evenly p-2">
                    <Image
                        src="https://i.ibb.co/r5krrdz/logo.png"
                        alt="Netflix Logo"
                        width={200}
                        height={100}
                        className="cursor-pointer z-[2]"
                    />
                    <Button variant='destructive' href="#" className="w-[120px] z-[2] rounded-sm">Sign In</Button>
                </div>
                <div className="flex flex-col justify-center items-center translate-y-96 gap-5 z-[2] relative">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground/90">
                        See what&apos;s next
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-primary-foreground/90">
                        Watch anywhere. Cancel Anytime
                    </p>
                    <Button variant='destructive' href="#" className="rounded-sm p-8 text-2xl">Watch Free For 30 Days <ArrowRight size={30} /></Button>
                </div>
            </header>
        </>
    );
}

export { Hero }