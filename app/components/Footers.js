const Footer = () => {
    return (
        <>

<div className="relative h-[500px]">
        <footer className="text-white flex flex-col items-center gap-3 py-6 absolute bottom-0 w-full">
          <p className="mb-4">Questions? Call 1-866-579-7172</p>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Ways To Watch</a></li>
              <li><a href="#" className="hover:underline">Corporate Information</a></li>
              <li><a href="#" className="hover:underline">Netflix Originals</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Terms Of Use</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Redeem Gift Cards</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Speed Test</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Media Center</a></li>
              <li><a href="#" className="hover:underline">Buy Gift Cards</a></li>
              <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
              <li><a href="#" className="hover:underline">Legal Notices</a></li>
            </ul>
          </div>
        </footer>
      </div>

        </>
    );
}


export { Footer }