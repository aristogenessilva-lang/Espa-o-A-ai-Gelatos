import Image from 'next/image';

export function Logo() {
  return (
    <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
      <div className="relative w-8 h-8 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white shadow-sm shrink-0">
        <Image
          src="https://instagram.fthe9-1.fna.fbcdn.net/v/t51.82787-19/590415013_17847398925613454_2824627187472100591_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fthe9-1.fna.fbcdn.net&_nc_cat=102&_nc_oc=Q6cZ2QFJmQNsDBaIV6CdPfdGTmkC_Ng2lJSMz9Y26bxqZCOoUXdd6qn7K0_KOMGnbO5-yyg&_nc_ohc=kX12arrLhHQQ7kNvwGvMsRi&_nc_gid=IiS31Lan6sYWP6BGZAvQKw&edm=AEYEu-QBAAAA&ccb=7-5&oh=00_AfylrnFgzkN3evlkOkZmCOYldxZQMdiwN40Y5R95lty7Ag&oe=69B371CB&_nc_sid=ead929"
          alt="Espaço Açaí & Gelatos Logo"
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <span className="font-serif text-[14px] sm:text-xl md:text-2xl font-bold text-[#6b1471] leading-tight truncate">
        Espaço <span className="text-[#00a859] italic font-medium">Açaí & </span>
        <span className="text-[#f26522] italic font-medium">Gelatos</span>
      </span>
    </div>
  );
}
