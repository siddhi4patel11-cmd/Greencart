import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer className="bg-green-50 text-gray-700 py-10 px-30 mt-10">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        <div className="md:col-span-2">
        <h2 className="text-2xl font-bold text-green-600">GreenCart</h2>
        <p className="mt-4 text-gray-600">
        We deliver fresh groceries and snacks straight to your door. Trusted
        by thousands, we aim to make your shopping experience simple and
        affordable.
        </p>
        </div>



        <div>
        <h3 className="font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
        <li><a href="#" className="hover:text-green-600">Home</a></li>
        <li><a href="#" className="hover:text-green-600">Best Sellers</a></li>
        <li><a href="#" className="hover:text-green-600">Offers & Deals</a></li>
        <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
        <li><a href="#" className="hover:text-green-600">FAQs</a></li>
        </ul>
        </div>


        {/* Help Section */}
        <div>
        <h3 className="font-semibold mb-4">Need help?</h3>
        <ul className="space-y-2">
        <li><a href="#" className="hover:text-green-600">Delivery Information</a></li>
        <li><a href="#" className="hover:text-green-600">Return & Refund Policy</a></li>
        <li><a href="#" className="hover:text-green-600">Payment Methods</a></li>
        <li><a href="#" className="hover:text-green-600">Track your Order</a></li>
        <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
        </ul>
        </div>



        <div>
        <h3 className="font-semibold mb-4">Follow Us</h3>
        <ul className="space-y-2">
        <li><a href="#" className="hover:text-green-600">Instagram</a></li>
        <li><a href="#" className="hover:text-green-600">Twitter</a></li>
        <li><a href="#" className="hover:text-green-600">Facebook</a></li>
        <li><a href="#" className="hover:text-green-600">YouTube</a></li>
        </ul>
        </div>
        </div>



        <div className="border-t border-gray-300 mt-10 pt-4 text-center text-gray-500 text-sm">
        Copyright 2025 © GreenCart.com All Rights Reserved.
        </div>
            </footer>

    </div>
  )
}

export default Footer
