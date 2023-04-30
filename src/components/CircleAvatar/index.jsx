function Avatar({ url, size, onClick }) {
   return (
      <img
         src={url}
         alt=""
         style={{
            width: `${size}px`,
            height: `${size}px`,
            objectFit: "cover",
            borderRadius: `${size}px`,
            cursor: "pointer",
            border: "1px solid #333",
         }}
         onClick={onClick}
      />
   );
}
export default Avatar;
