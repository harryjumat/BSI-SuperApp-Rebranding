Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Cardless Withdrawal - Tarik Tunai ATM BSI", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Tarik Tunai ATM BSI")

Call react.Addtitle("BSI SuperApps - Tarik Tunai ATM BSI")
Call TarikTunaiATM()
Call SaveReact_Merge()	
