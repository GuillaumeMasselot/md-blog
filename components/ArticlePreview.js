import Image from 'components/Image'
import Link from 'next/link'

export default function ArticlePreview({ title, description, date, author, miniature, slug }) {
    return (

        <div className="md:flex">
            <div className="md:flex-shrink-0">
                <Image
                    alt={description}
                    src={require(`../content/assets/${miniature}`)}
                    webpSrc={require(`../content/assets/${miniature}?webp`)}
                    previewSrc={require(`../content/assets/${miniature}?lqip`)}
                    className="rounded-lg md:w-56"
                    width="448" height="299"
                />
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
                <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Peinture</div>
                <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                    <a className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">{title}</a>
                </Link>
                
                <p className="mt-2 text-gray-600">{description}</p>
                <p className="mt-2 text-gray-600">{date} - {author}</p>
            </div>
        </div>
    );
}
