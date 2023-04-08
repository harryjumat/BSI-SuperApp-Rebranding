Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

''================Wanita Toogle Off=================
'Call Path_Folder()
'Call InitiateReact_V2_1(CoverTitle, "Bayar Beli  - Aqiqah", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Aqiqah")
'
'Call react.Addtitle("BSI SuperApps - Aqiqah Wanita Toogle Off - Positive")
'Call Aqiqah("dompet", "wanita", "off")
'Call SaveReact_Merge()	


''================Wanita Toogle On=================
'
'Call Path_Folder()
'Call InitiateReact_V2_1(CoverTitle, "Bayar Beli  - Aqiqah", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Aqiqah")
'
'Call react.Addtitle("BSI SuperApps - Aqiqah Wanita Toogle On - Positive")
'Call Aqiqah("dompet","wanita","on")
'Call SaveReact_Merge()

''================Pria Toogle Off=================
'Call Path_Folder()
'Call InitiateReact_V2_1(CoverTitle, "Bayar Beli  - Aqiqah", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Aqiqah")
'
'Call react.Addtitle("BSI SuperApps - Aqiqah Pria Toogle Off - Positive")
'Call Aqiqah("dompet","pria","off")
'Call SaveReact_Merge()	

'================Pria Toogle On=================

Call Path_Folder()
Call InitiateReact_V2_1(CoverTitle, "Bayar Beli  - Aqiqah", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Aqiqah")

Call react.Addtitle("BSI SuperApps - Aqiqah Pria Toogle On - Positive")
Call Aqiqah("dompet","pria","on")
Call SaveReact_Merge()
