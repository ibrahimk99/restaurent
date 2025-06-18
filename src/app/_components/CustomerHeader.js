import Link from "next/link"
const CustomerHeader = () => {
    return (
        <div>
            <div className="logo">
                <img style={{ width: 100 }}
                    src="https://s.tmimgcdn.com/scr/1200x627/242400/food-delivery-custom-design-logo-template_242462-original.png" />
            </div>
            <ul>
                <li>
                    <Link href="/restaurent">Home</Link></li>
                <button >Log Out</button>
                <li><Link href="/restaurent">Cart</Link></li>
                <li><Link href="/restaurent">Add Restaurent</Link></li>
                <li><Link href="/restaurent">Login/SignUp</Link></li>
            </ul>
        </div>
    )
}
export default CustomerHeader