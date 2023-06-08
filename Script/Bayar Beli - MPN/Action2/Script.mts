Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar Beli - Profile - MPN", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Bayar Beli - MPN")

Call react.Addtitle("BSI SuperApps  - MPN - Negative")
Call MPNNegative("Pajak","820210422426692")
Call SaveReact_Merge()	
