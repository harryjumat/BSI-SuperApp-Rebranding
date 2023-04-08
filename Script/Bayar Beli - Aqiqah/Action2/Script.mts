Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar Beli  - Aqiqah", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Aqiqah")

Call react.Addtitle("BSI SuperApps - Aqiqah Pria Toogle Off - Negative")
Call AqiqahNegative("dompet","pria","off")
Call SaveReact_Merge()	


