Call LoadFunctionLibrary(Environment("TestDir") & "\..\..\Function Library\BSI Mobile - Function Global.qfl")

'Call Path_Folder()
'Call InitiateReact_V2_1(CoverTitle, "Berbagi - Jadiberkah", CompanyLogo, projectName, "Automation Testing", "BSI SuperApps Jadiberkah")
'
'Call react.Addtitle("BSI SuperApps - Jadiberkah - Positive")
'Call Login()
'Call SaveReact_Merge()	

'============================================================================================================================================================
'Biller bpjs pu taighan lunas: 220100001644


'Device("Device").App("Dev").Launch

'inobj_pencilpembelian.Click

'inobj_pencilpembayaran.Click

'print tanggal saat ini
's = date()
'print(s)


inobj_aturlimit.Click
Call LoopUntil()
do
inobj_pencilpembelian.Swipe "up",205,430
Loop until lbl_pembayaran.Exist
inobj_penciltariktunai.Click
wait 1
txt_carirekening.Set "100000"
wait 1
lbl_simpan.Tap
wait 1
lbl_1.Tap
lbl_2.Tap
lbl_3.Tap
lbl_4.Tap
lbl_5.Tap
lbl_6.Tap
