Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar Beli  - Universitas Ahmad Dahlan", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Universitas Ahmad Dahlan")

Call react.Addtitle("BSI SuperApps - Universitas Ahmad Dahlan - Positive")
Call AkademikClosePayment("ahmad","9003999999123402")
Call SaveReact_Merge()	
