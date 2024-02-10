

function Footer() {

    const footerYear= new Date().getFullYear()
  return (
    <footer className="footer p-5 bg-gray-800 text-primary-content footer-center">
      <div>
      
        <svg  width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 21L17 3" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7 21L11 3" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 9L4 9" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 15L20 15" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>Copyright &copy;{footerYear} All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer
