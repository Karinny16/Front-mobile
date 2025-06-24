import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import LogoC from '../../assets/LogoCairesC.png';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { Styles } from './reservas.styles';
import { Feather } from "@expo/vector-icons"
import { useState } from "react"
import { ptBR } from '../utils/localeCalendarConfig'
import {DayState} from "react-native-calendars/src/types";

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"

const Reservas = () => {

    const [day, setDay] = useState<DateData>()

    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>Tela de Reservas</Text>
            <View style={Styles.boxContainer}>
                <ScrollView contentContainerStyle={Styles.scrollContent}>
                    <View style={Styles.logoContainer}>
                        <Image source={LogoC} style={Styles.logoImage} />
                    </View>
                    <View style={Styles.containerCalen}>
                        <Calendar
                            style={Styles.calendar}
                            renderArrow={(direction: "right" | "left") => (<Feather size={24} color="#E8E8E8"
                                name={`chevron-${direction}`} />
                            )}
                            headerStyle={{
                                borderBottomWidth: 0.5,
                                borderBottomColor: "#E8E8E8",
                                paddingBottom: 10,
                                marginBottom: 10,
                            }}
                            theme={{
                                textMonthFontSize: 18,
                                monthTextColor: "#F06543",
                                todayTextColor: "#F06543",
                                selectedDayBackgroundColor: "#F06543", // Corrigido
                                selectedDayTextColor: "#E8E8E8",
                                arrowColor: "#E8E8E8",
                                calendarBackground: "transparent",
                                textDayStyle: { color: "#E8E8E8" },
                                textDisabledColor: "#717171",
                                arrowStyle: {
                                    margin: 0,
                                    padding: 0,
                                }
                            }}
                            minDate={new Date().toDateString()}
                            hideExtraDays={true}
                            onDayPress={setDay}
                            markedDates={day && {
                                [day.dateString]: { selected: true },
                            }}
                            dayComponent={({
                                date,
                                state,
                            }:
                                 { date: DateData
                                    state: DayState
                                 }) => {
                               return (
                                <TouchableOpacity style={[Styles.day,
                                    date.dateString === day?.dateString && Styles.daySelected,
                                ]}
                                onPress={() => setDay(date)}
                                >
                                    <Text style={[Styles.dayText,
                                        (state === "inactive"  || state === "disabled") && Styles.disabled,
                                       state === "today" && Styles.today,
                                       date.dateString === day?.dateString && Styles.dayText,
                                    ]}>{date.day}</Text>
                                </TouchableOpacity>
                               )
                            }}
                        />
                        <Text  style={Styles.selected}>Data selecionada: {day?.dateString}</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default Reservas;
