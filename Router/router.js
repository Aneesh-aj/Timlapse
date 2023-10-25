const express = require("express")
const router= express.Router()
const nocache = require("nocache")


const {render} = require("ejs")


const usersModel = require("../model/users-model")
const adminsModel = require("../model/admin-model")
const session = require("express-session")
const cookieParser = require("cookie-parser")
const controller = require("../controllers/userController")
const userMiddleware = require('../middleware/isuser')
const { civicinfo } = require("googleapis/build/src/apis/civicinfo")


router.get("/" ,userMiddleware.checkUserStatus,controller.landing)
router.get("/home",userMiddleware.checkUserStatus,controller.homepageview)
router.post("/profile",userMiddleware.currentuser,controller.profilePost)
router.get("/profile",userMiddleware.checkUserStatus,userMiddleware.currentuser,controller.profileView)
router.get("/login",controller.loginView)
router.post("/login",controller.loginPost)
router.post("/logout",controller.userLogout)
router.get("/signup",userMiddleware.checkUserStatus, controller.singupView)
router.post("/signup",controller.signupPost)
router.post("/otpverification" ,controller.verficatiionPost )
router.get("/verification",userMiddleware.checkUserStatus,controller.verification)
router.get("/collection", controller.showCollection)
router.get("/product",userMiddleware.checkUserStatus,controller.productPageview)
router.get("/resend-otp",userMiddleware.checkUserStatus,controller.verificatioinResend)

router.get("/cart",userMiddleware.checkUserStatus,userMiddleware.currentuser,controller.cart)
 
router.post("/remove-from-cart",userMiddleware.checkUserStatus,controller.removeincart)

router.post("/api/add-to-cart",userMiddleware.checkUserStatus,controller.addToCart)
router.post("/add-address",userMiddleware.checkUserStatus,controller.addAdress)
router.post("/profile/edit",userMiddleware.checkUserStatus,controller.edituserDetalis)
router.post("/quantity-update",userMiddleware.checkUserStatus, controller.quantityUpdate);
router.get("/checkout",userMiddleware.checkUserStatus,userMiddleware.currentuser,controller.checkoutView)
router.post("/add-newaddress",userMiddleware.checkUserStatus,controller.newaddress)
router.post("/delete-address",userMiddleware.checkUserStatus,controller.deleteAddress)
router.post("/editAddress",userMiddleware.checkUserStatus,controller.addressEdit)
router.post("/placeorder",userMiddleware.checkUserStatus,controller.placeorder)
router.post("/checkout-editaddress",userMiddleware.checkUserStatus,controller.checkoutaddressEdit)
router.get("/order",userMiddleware.checkUserStatus,userMiddleware.currentuser,   controller.ordersPage)
router.get("/order/orderdetails",userMiddleware.checkUserStatus,controller.userOrderdetails)
router.post("/cancel-order",controller.cancelOrder)
router.get("/forgotpassword",controller.forgotpassword)
router.post("/forgotpassword",controller.forgotpasswordpost)
router.get("/verificationPassword",controller.verificationPassword)
router.post("/verificationPassotp",controller.otpverifyPassword)
router.post("/addtoWishlist",controller.addtoWishlist)
router.get("/wishlist",userMiddleware.checkUserStatus,userMiddleware.currentuser,controller.wishlist)
router.post("/api/addingtocart",controller.addingtocart)
router.post("/removefromwishlist",controller.deletewishlist)
router.post("/ordercheckout",controller.ordercheckout)
router.get("/wallet",controller.wallet)
router.post("/returnrequest",controller.returnOrder)
router.post("/apply-coupon",controller.applycoupn)
router.get("/invoice",userMiddleware.checkUserStatus,userMiddleware.currentuser,controller.invoiceget)

module.exports = router
