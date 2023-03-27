Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli -  E-Wallet LinkAja", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps LinkAja")

Call react.Addtitle("BSI SuperApps - LinkAja - Negative")
Call EwalletNegative("linkaja")
Call SaveReact_Merge()	
