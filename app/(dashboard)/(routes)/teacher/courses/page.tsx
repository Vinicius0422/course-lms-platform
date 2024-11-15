import { Button } from "@/components/ui/button";
import Link from "next/link";


const CoursePage = () => {
    return ( 
        <Link href="/teacher/create">
            <Button>
                Create course
            </Button>
        </Link>
     );
}
 
export default CoursePage;