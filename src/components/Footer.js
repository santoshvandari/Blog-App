export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
            <div className="max-w-6xl mx-auto px-6 py-8 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    © {year} Blog App. A minimal blogging platform built with Next.js & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}
