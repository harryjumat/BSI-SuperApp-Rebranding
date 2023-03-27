Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli -  E-Wallet ShopeePay", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps ShopeePay")

Call react.Addtitle("BSI SuperApps - ShopeePay - Negative")
Call EwalletNegative("shopeepay")
Call SaveReact_Merge()	
