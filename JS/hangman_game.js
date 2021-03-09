                var motSecret;				
				var now=new Date();			// recuperer la date courante
				var tableauMot=new Array();	// Le tableau qui contient les lettres du mot a trouver, recuperer par identifiant
				var mots=new Array();		// Le tableau qui contient tous les mots possibles
				
				var tailleMot;				// La taille du mot selectionne
				var coupsManques=0;			// Le nombre de vies perduess
				var lettresTrouvees=0;		// Le nombre de lettres trouvees
				var fini=false;				// true si le jeu est termine
				
				mots[0]="BENREFAD";
				mots[1]="INGENIEUR";
				mots[2]="POMPIER";
				mots[3]="TECHNICIEN";
				mots[4]="PLACARD";
				mots[5]="MANGER";
				mots[6]="PROGRAMMATION";
				mots[7]="VOITURE";
				mots[8]="AJOURNER";
				mots[9]="ORDINATEUR";
				mots[10]="IDIOT";
				mots[11]="VALIDATION";
				mots[12]="RATTRAPPAGE";
				
				
				motSecret=mots[now.getSeconds() % mots.length];
				tailleMot=motSecret.length;
				
				function changeCouleur(element,couleur){
					element.style.backgroundColor=couleur;
				}
				
				
				function proposer(element){
					
					
					if(element.style.backgroundColor=="lightGreen" ||fini) return;
					var lettre=element.innerHTML;
					changeCouleur(element,"lightGreen");
					
					
					var trouve=false;
					
					
					for(var i=0; i<tailleMot; i++) {
						
						if(tableauMot[i].innerHTML==lettre) {
							tableauMot[i].style.visibility='visible';	
							trouve=true;
							lettresTrouvees++;
						}
						
					}
					
				
					if(!trouve){
						coupsManques++;
						document.images['pendu'].src="images/pendu/"+coupsManques+".jpg"; 
					
						if(coupsManques==7){
							alert("Game Over !");
							for(var i=0; i<tailleMot; i++) tableauMot[i].style.visibility='visible';
							fini=true;

						}
					}
					if(lettresTrouvees==tailleMot){
						alert("Bravo ! Vous avez gagne !");
						fini=true;
					}
				}
			