import { Link } from "react-router-dom"; // Changed from useLocation to Link
import { AlertTriangle } from 'lucide-react'; // Added an icon
import { Button } from "@/components/ui/button"; // Import Button

const NotFound = () => {
  // Removed useEffect and useLocation as they are not strictly necessary for a simple 404 display
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground font-sans p-6 text-center">
      <AlertTriangle className="w-16 h-16 text-destructive mb-6" />
      <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary mb-4">404</h1>
      <p className="text-xl md:text-2xl text-secondary mb-2">Oops! Page Not Found</p>
      <p className="text-base text-muted-foreground mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Button asChild size="lg" className="rounded-sm text-base px-8 py-3">
        <Link to="/">
          Return to Homepage
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
