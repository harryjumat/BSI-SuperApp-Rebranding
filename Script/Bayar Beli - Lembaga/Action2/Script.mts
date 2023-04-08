Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

''KALTIM
'Call Path_Folder()
'Call InitiateReact_V2_1(CoverTitle, "Bayar Beli - Universitas Kaltim", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Universitas Kaltim")
'
'Call react.Addtitle("BSI SuperApps - Universitas Kaltim - Negative")
'Call LembagaClosePaymentNegative("kaltim","9999991")
'Call SaveReact_Merge()


'BAYAR ID
Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar Beli - Bayar ID", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Bayar ID")

Call react.Addtitle("BSI SuperApps - Bayar ID - Negative")
Call LembagaClosePaymentNegative("bayar","9999991")
Call SaveReact_Merge()
