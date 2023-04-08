Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar Beli  - UIN STS Jambi", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps UIN STS Jambi")

Call react.Addtitle("BSI SuperApps - UIN STS Jambi - Negative")
Call AkademikClosePaymentNegative("uin sts jambi","999999123123")
Call SaveReact_Merge()	


