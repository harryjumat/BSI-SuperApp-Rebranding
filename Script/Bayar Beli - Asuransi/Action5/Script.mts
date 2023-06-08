Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar Beli - Asuransi", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps CAR Tagihan Lainnya")

Call react.Addtitle("BSI SuperApps - CAR Tagihan Lainnya - Negative")
Call AsuransiOpenPaymentNegative("cartagihanlainnya","25455222456123456789")
Call SaveReact_Merge()	
