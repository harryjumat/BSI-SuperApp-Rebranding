Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar & Beli -  E-Wallet OVO", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps OVO")

Call react.Addtitle("BSI SuperApps - OVO - Positive")
Call Ewallet("ovo")
Call SaveReact_Merge()	
