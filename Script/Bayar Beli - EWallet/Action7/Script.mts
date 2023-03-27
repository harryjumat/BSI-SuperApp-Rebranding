Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli -  E-Wallet DANA", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps DANA")

Call react.Addtitle("BSI SuperApps - DANA - Positive")
Call Ewallet("dana")
Call SaveReact_Merge()	
