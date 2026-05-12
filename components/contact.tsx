// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

// export function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log("Form submitted:", formData);
//     alert("Thank you for your message. We will get back to you soon!");
//     setFormData({ name: "", email: "", company: "", message: "" });
//   };

//   return (
//     <section id="contact" className="py-24 bg-background">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center mb-16">
//           <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
//             Contact Us
//           </h2>
//           <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
//             Contact Our Team{" "}
//           </p>
//           <p className="mt-4 text-lg text-muted-foreground text-pretty">
//             Reach out to our team for professional air cargo representation and
//             operational support tailored to your business needs.{" "}
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="bg-card rounded-2xl p-8 border border-border">
//               <h3 className="text-xl font-bold text-foreground mb-6">
//                 Contact Information
//               </h3>

//               <div className="space-y-6">
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
//                       <MapPin className="h-6 w-6 text-primary" />
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground">
//                       Office Address
//                     </h4>
//                     <p className="mt-1 text-muted-foreground">
                     
//                       Cairo, Egypt
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
//                       <Phone className="h-6 w-6 text-primary" />
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground">Phone</h4>
//                     <p className="mt-1 text-muted-foreground">
                    
//                       +20 10 0249 4770
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
//                       <Mail className="h-6 w-6 text-primary" />
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground">Email</h4>
//                     <p className="mt-1 text-muted-foreground">
//                       {/* info@focuslogistics.eg
//                       <br /> */}
//                       sales@focusaviations.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0">
//                     <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
//                       <Clock className="h-6 w-6 text-primary" />
//                     </div>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-foreground">
//                       Business Hours
//                     </h4>
//                     <p className="mt-1 text-muted-foreground">
//                       Saturday - Thursday: 9:00 AM - 6:00 PM
//                       <br />
//                       Friday : Closed
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-card rounded-2xl p-8 border border-border">
//             <h3 className="text-xl font-bold text-foreground mb-6">
//               Send Us a Message
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-foreground mb-2"
//                   >
//                     Full Name
//                   </label>
//                   <Input
//                     id="name"
//                     type="text"
//                     placeholder="John Doe"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-foreground mb-2"
//                   >
//                     Email Address
//                   </label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="john@example.com"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="company"
//                   className="block text-sm font-medium text-foreground mb-2"
//                 >
//                   Company Name
//                 </label>
//                 <Input
//                   id="company"
//                   type="text"
//                   placeholder="Your Company"
//                   value={formData.company}
//                   onChange={(e) =>
//                     setFormData({ ...formData, company: e.target.value })
//                   }
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-foreground mb-2"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={5}
//                   placeholder="How can we help you?"
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                   required
//                   className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
//                 />
//               </div>

//               <Button type="submit" className="w-full">
//                 <Send className="mr-2 h-4 w-4" />
//                 Send Message
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.send(
        "service_b75k5y3",
        "service_b75k5y3",
        {
          from_name: formData.name,
          from_email: formData.email,
          company_name: formData.company,
          message: formData.message,
          to_email: "sales@focusaviations.com",
        },
        "dXu-O6LBwM_YHnt9C" // Your EmailJS public key
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent Successfully",
        text: "Our team will contact you shortly.",
        confirmButtonColor: "#0f4aa1",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again later.",
        confirmButtonColor: "#0f4aa1",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Contact Us
          </h2>

          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Contact Our Team
          </p>

          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Reach out to our team for professional air cargo representation and
            operational support tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">
                      Office Address
                    </h4>

                    <p className="mt-1 text-muted-foreground">
                      Cairo, Egypt
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>

                    <p className="mt-1 text-muted-foreground">
                      +20 10 0249 4770
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>

                    <p className="mt-1 text-muted-foreground">
                      sales@focusaviations.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">
                      Business Hours
                    </h4>

                    <p className="mt-1 text-muted-foreground">
                      Saturday - Thursday: 9:00 AM - 6:00 PM
                      <br />
                      Friday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>

                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>

                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company Name
                </label>

                <Input
                  type="text"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      company: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  required
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                <Send className="mr-2 h-4 w-4" />

                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}