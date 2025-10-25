import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import img4 from "../../assets/img4.webp";
import img5 from "../../assets/img5.webp";
import img6 from "../../assets/img6.webp";
import img7 from "../../assets/img7.webp";
import img8 from "../../assets/img8.webp";
import img9 from "../../assets/img9.webp";
import img10 from "../../assets/img10.webp";
import img11 from "../../assets/img11.webp";
import img12 from "../../assets/img12.webp";

const galleryImages = [
  img1, img2, img3, img4,
  img5, img6, img7, img8,
  img9, img10, img11, img12
];

export default function Gallery() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-4 grid-rows-3 w-full h-full">
        {galleryImages.map((img, idx) => (
          <div
            key={idx}
            className="w-full h-full overflow-hidden relative group"
          >
            <img
              src={img}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
