import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-foreground/10">
      <div className="cont py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-mono">YumYard</h3>
            <p className="text-foreground/70">
              Discover the best recipes, cooking tips, and food inspiration for
              every occasion.
            </p>
            <div className="flex space-x-4 pt-2">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-primary/10"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/recipes"
                  className="hover:text-primary transition-colors text-foreground/80"
                >
                  All Recipes
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors text-foreground/80"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors text-foreground/80"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors text-foreground/80"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors text-foreground/80"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/breakfast"
                  className="hover:text-primary transition-colors text-foreground/80"
                >
                  Breakfast
                </Link>
              </li>
              <li>
                <Link
                  href="/category/lunch"
                  className="hover:text-primary transition-colors text-foreground/80"
                >
                  Lunch
                </Link>
              </li>
              <li>
                <Link
                  href="/category/dinner"
                  className="hover:text-primary transition-colors text-foreground/80"
                >
                  Dinner
                </Link>
              </li>
              <li>
                <Link
                  href="/category/desserts"
                  className="hover:text-primary transition-colors text-foreground/80"
                >
                  Desserts
                </Link>
              </li>
              <li>
                <Link
                  href="/category/vegan"
                  className="hover:text-primary transition-colors text-foreground/80"
                >
                  Vegan
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-foreground/70 mb-4">
              Subscribe to our newsletter for the latest recipes and cooking
              tips!
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-foreground/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button className="bg-primary hover:bg-primary/90 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © {currentYear} FoodieHub. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-foreground/60 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-foreground/60 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-foreground/60 hover:text-primary text-sm transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
