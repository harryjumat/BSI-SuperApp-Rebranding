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



Call TabunganSumber("transaksi")
		Call Capture(lbl_jenispajak,"Dev","Sumber Rekening","Berhasil memilih sumber rekening, klik lanjutkan")
'		If inobj_lanjutkan.Exist Then
			lbl_lanjutkan.Tap
'		End If
		Call LoopUntil()
'		If lbl_konfirmasi.Exist Then
			Call Capture(lbl_konfirmasi,"Dev","Konfirmasi Transaksi","Berhasil menampilkan konfirmasi transaksi, klik konfirmasi")
'		End If
'		If lbl_konfirmasi Then
			lbl_konfirmasi.Tap



