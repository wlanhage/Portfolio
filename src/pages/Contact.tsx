import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center space-y-4">
          <span className="text-primary text-sm font-medium px-4 py-1 rounded-full bg-primary/10">
            Get in Touch
          </span>
          <h1 className="text-4xl font-bold">Let's Work Together</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-primary" />
                  <span>hello@example.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-xl space-y-4">
              <h3 className="font-semibold">Office Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 rounded-xl"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors min-h-[150px]"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;