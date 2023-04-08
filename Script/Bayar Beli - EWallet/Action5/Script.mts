Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli -  E-Wallet GoPay", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps GoPay")

Call react.Addtitle("BSI SuperApps - GoPay - Positive")
Call Ewallet("go-pay")
Call SaveReact_Merge()	
