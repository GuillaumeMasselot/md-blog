import Image from 'components/Image'
import Link from 'next/link'

export default function ArticlePreview({ title, description, date, author, miniature, slug }) {
    return (

        <div className="w-full lg:max-w-full lg:flex">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="gwaien">
                <Image
                    alt={description}
                    src={require(`../content/assets/${miniature}`)}
                    webpSrc={require(`../content/assets/${miniature}?webp`)}
                    previewSrc={require(`../content/assets/${miniature}?lqip`)}
                    className="w-full h-48 object-cover"/>
                </div>
            <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center uppercase text-indigo-600 font-bold">
                        painting
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">
                        <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                            <a className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">{title}</a>
                        </Link>
                    </div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
                <div className="flex items-center">
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none">{author}</p>
                        <p className="text-gray-600">{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
