const express = require("express")

const router= express.Router()
const uploadImages = require("../config/multer")
const { render } = require("ejs")
const controller = require("../controllers/adminController")
const bannerupload = require("../config/banner")
const adminMiddleware = require("../middleware/isAdmin")
      
               
router.get("/",adminMiddleware.isadmin, controller.adminpageView )
router.get("/logout",controller.adminLogout)

router.get("/product-managment",adminMiddleware.isadmin, controller.productManagment)
router.get("/user-managment",adminMiddleware.isadmin,controller.userManagment)
      
router.get("/product-managment/add-product",adminMiddleware.isadmin,controller.addProduct)
router.get("/product-managment/edit/:id",adminMiddleware.isadmin,controller.editProduct)
router.post("/product-managment/edit/submit",controller.editedProduct)
router.post("/product-managment/list/:id",controller.productListing)
router.post("/product-managment/adding",controller.productAdding)
router.post("/category",controller.watchtypeAdding)
router.get("/category",adminMiddleware.isadmin,controller.categoryGet)
router.post("/category/edit",controller.watchtypeEdit)
router.get("/category/list",adminMiddleware.isadmin,controller.watchtypeList)
router.post("/category/brands",controller.brandsAdding)
router.get("/category/brand-list",adminMiddleware.isadmin,controller.brandList)
router.post("/user-managment/block",controller.userBlock)
router.get("/orders",adminMiddleware.isadmin,controller.orderpageview)
router.get("/orders/orderdetails",adminMiddleware.isadmin,controller.adminorderDetails)
router.post("/update-order-status",controller.updateStatus)
router.post("/cancel-order",controller.cancelOrder)
router.get("/coupon",adminMiddleware.isadmin,controller.coupon)
router.post("/coupon",controller.addingcoupon)
router.get("/banners",adminMiddleware.isadmin,controller.bannerpageRendering)
router.post("/banneradding",bannerupload.single('image'),controller.banneradding)
router.post("/removeBanner",controller.removeBannerImage)
router.post("/report",controller.chartreport)
router.get("/salesreport",adminMiddleware.isadmin,controller.salesreport)
router.post('/watchtype-exist',controller.watchtypechecking)
router.post("/brand-exist",controller.brandexist)
router.post("/category/brandedit",controller.brandedit)

module.exports = router