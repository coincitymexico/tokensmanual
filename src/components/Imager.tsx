import Image from 'next/image'

export function Imager(props: React.ComponentPropsWithoutRef<'img'>) {
    return (
        <figure className="text-xs w-full max-w-lg mx-auto">
        <Image
            src={props.src ?? ''}
            alt={props.alt ?? ''}
            {...props}
            width={500} height={500}
            className="rounded-xl mx-auto w-full"
        />
        {props.alt && (
            <figcaption className="mt-0.5 mb-0.5 text-center text-slate-600 dark:text-slate-400">
                {props.alt}
            </figcaption>
        )}
        </figure>
    )
}