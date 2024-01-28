import logoImage from "../images/MB_logo.png" 
function Logo() {
  return (
    <img src={logoImage} alt="logo"
    className="w-14 h-14 rounded-full bg-contain"
    />
  )
}

export default Logo