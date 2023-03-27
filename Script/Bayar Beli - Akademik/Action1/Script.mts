Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar Beli  - Universitas Andalas", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Universitas Andalas")

Call react.Addtitle("BSI SuperApps - Universitas Andalas - Positive")
Call AkademikOpenPayment("andalas","biller")
Call SaveReact_Merge()
