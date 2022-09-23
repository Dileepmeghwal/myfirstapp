import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import '../components/ExploreContainer'
import './Greeting.css'
import ExploreContainer from './ExploreContainer';
import './ExploreContainer.css'
import {
    IonAccordion,
    IonAccordionGroup,
} from '@ionic/react';


function Example() {
    return (
        <div className="container">
            <div className="grid">
                <div className="box">
                    <IonCard>
                        <IonCardHeader>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            Keep close to Nature's heart... and break clear away, once in awhile,
                            and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </IonCardContent>
                    </IonCard>
                </div>
                <div className="box">
                    <IonAccordionGroup>
                        <IonAccordion value="first">
                            <IonItem slot="header" color="light">
                                <IonLabel>First Accordion</IonLabel>
                            </IonItem>
                            <div className="ion-padding" slot="content">
                                First Content
                            </div>
                        </IonAccordion>
                        <IonAccordion value="second">
                            <IonItem slot="header" color="light">
                                <IonLabel>Second Accordion</IonLabel>
                            </IonItem>
                            <div className="ion-padding" slot="content">
                                Second Content
                            </div>
                        </IonAccordion>
                        <IonAccordion value="third">
                            <IonItem slot="header" color="light">
                                <IonLabel>Third Accordion</IonLabel>
                            </IonItem>
                            <div className="ion-padding" slot="content">
                                Third Content
                            </div>
                        </IonAccordion>
                    </IonAccordionGroup>
                </div>
            </div>
        </div>
    );
}


export default Example;