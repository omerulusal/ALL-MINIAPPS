import prsima from "@/app/libs/prismadb"
import Image from "next/image"
const page = async () => {
    const listings = await prsima.listing.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    return (
        <div>
            {
                listings?.map((listing) => (
                    <div key={listing.id} className="w-[250px] border p-5 rounded-lg">
                        <Image
                            src={listing.imageSrc}
                            alt='image'
                            width={200}
                            height={200}
                        />
                        <div className="text-2xl font-bold text-gray-800">
                            {listing.category} - {listing.locationValue}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default page