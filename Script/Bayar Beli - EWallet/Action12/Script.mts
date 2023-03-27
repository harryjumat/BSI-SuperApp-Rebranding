Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli -  E-Wallet LinkAja Syariah", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps LinkAja Syariah")

Call react.Addtitle("BSI SuperApps - LinkAja Syariah - Negative")
Call EwalletNegative("linkajasyariah")
Call SaveReact_Merge()	
