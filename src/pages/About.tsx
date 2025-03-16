
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Learn about our mission and what drives us.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl items-center gap-8 py-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground">
                  We're dedicated to creating tools and solutions that help people build amazing products. Our team is passionate about technology and innovation.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in 2023, we started with a simple idea: make building web applications easier and more accessible. Since then, we've been on a journey to create the best tools for developers and businesses.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Our Values</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Quality over quantity</li>
                  <li>User experience comes first</li>
                  <li>Continuous learning and improvement</li>
                  <li>Open collaboration and transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
