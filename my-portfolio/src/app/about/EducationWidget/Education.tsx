export default function Education() {
    return (
        <div className="pt-4 pl-8 w-auto h-auto border-2 border-gray-300 rounded-lg p-6 shadow-md mx-4 my-4">
            <h1 className="font-bold text-2xl pb-6">Education</h1>
            <div>
                <p className="pb-2">
                    I am pursuing an Associate of Science degree and a certificate in Software Engineering. At first, I was unsure if it would be a suitable field for me because I was intimidated by programming. However, after giving it a try, I discovered that I can indeed do it.
                </p>
            </div>
            <div className="pt-4">
                <img src="/ensign.png" alt="Ensign college logo" className="w-20 h-20" />
            </div>
            <div className="pt-4">
                <div className="flex justify-between items-center">
                    <p className="font-bold">Associate of Science</p>
                    <p className="pr-80">2023-2025</p>
                </div>
                <div className="flex justify-between items-center pt-4">
                    <p className="font-bold">Certificate of Software Engineering</p>
                    <p className="pr-80">2023-2025</p>
                </div>
            </div>
        </div>
    )
}