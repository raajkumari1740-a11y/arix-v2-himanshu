const fonts = [
  "Inter",
  "Poppins",
  "Roboto",
  "Outfit",
  "Montserrat",
];

export default function FontSelector() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="mb-5 text-xl font-bold">
        Font Selector
      </h2>

      <select className="w-full rounded-xl bg-black/30 p-3 outline-none">
        {fonts.map((font) => (
          <option key={font}>{font}</option>
        ))}
      </select>
    </div>
  );
}
