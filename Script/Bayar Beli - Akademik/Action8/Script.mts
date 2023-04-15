Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar Beli  - Bayar ID", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Bayar ID")

Call react.Addtitle("BSI SuperApps - Bayar ID - Negative")
Call AkademikClosePaymentNegative("bayar id","999999999912345678")
Call SaveReact_Merge()
