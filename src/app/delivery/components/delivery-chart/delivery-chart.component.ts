// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5radar from '@amcharts/amcharts5/radar';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as am5xy from '@amcharts/amcharts5/xy';
import {AxisRenderer} from '@amcharts/amcharts5/xy';
import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DeliveryOption} from '@flfr-app/delivery/models/deliveryOption';
import {DeliveryService} from '@flfr-app/delivery/services/delivery.service';

@Component({
  selector: 'app-delivery-chart',
  templateUrl: './delivery-chart.component.html',
  styleUrls: ['./delivery-chart.component.scss']
})
export class DeliveryChartComponent implements OnInit, AfterViewInit {

  deliveryOptions: DeliveryOption[] = [];
  data: any[] = [];
  private chart: am5radar.RadarChart | undefined;
  private yAxis: am5xy.CategoryAxis<any> | undefined;
  private series1: any;
  private series2: any;

  constructor(private deliveryService: DeliveryService) {
  }

  ngOnInit(): void {
    this.deliveryService.getDeliveryOptionsObservable().subscribe((delveryOptions: DeliveryOption[]) => {
      this.deliveryOptions = delveryOptions;
      if (this.chart && this.yAxis) {
        this.fillData();
        this.yAxis.data.setAll(this.data);
        this.series1.data.setAll(this.data);
        this.series2.data.setAll(this.data);
        this.series1.appear(1000);
        this.series2.appear(1000);
        this.chart.appear(1000, 100);
      }
    });
  }

  fillData = () => {
    let i = -1;
    this.data = this.deliveryOptions.map(elt => {
      i = i + 1;
      return {
        category: elt.libelle,
        value: elt.value,
        full: 40,
        columnSettings: {
          // @ts-ignore
          fill: this.chart.get('colors').getIndex(i)
        }
      };
    });
  };

  ngAfterViewInit(): void {

    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    const root = am5.Root.new('chartdiv');

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/radar-chart/
    this.chart = root.container.children.push(am5radar.RadarChart.new(root, {
      panX: false,
      panY: false,
      wheelX: undefined,
      wheelY: undefined,
      innerRadius: am5.percent(20),
      startAngle: -90,
      endAngle: 180
    }));


    // Data
    this.fillData();

    // Create axes and their renderers
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_axes
    const xRenderer = am5radar.AxisRendererCircular.new(root, {
      // minGridDistance: 50
    });

    xRenderer.labels.template.setAll({
      radius: 10
    });

    xRenderer.grid.template.setAll({
      forceHidden: true
    });

    const xAxis = this.chart.xAxes.push(am5xy.ValueAxis.new(root, {
      renderer: xRenderer as AxisRenderer,
      min: 0,
      max: 40,
      strictMinMax: true,
      numberFormat: '#\'€\'',
      tooltip: am5.Tooltip.new(root, {})
    }));


    const yRenderer = am5radar.AxisRendererRadial.new(root, {
      minGridDistance: 20
    });

    yRenderer.labels.template.setAll({
      centerX: am5.p100,
      fontWeight: '500',
      fontSize: 18,
      templateField: 'columnSettings'
    });

    yRenderer.grid.template.setAll({
      forceHidden: true
    });

    this.yAxis = this.chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: 'category',
      renderer: yRenderer as AxisRenderer
    }));

    this.yAxis.data.setAll(this.data);

    const yAxis = this.yAxis;

    // Create series
    // https://www.amcharts.com/docs/v5/charts/radar-chart/#Adding_series
    this.series1 = this.chart.series.push(am5radar.RadarColumnSeries.new(root, {
      xAxis,
      yAxis,
      clustered: false,
      valueXField: 'full',
      categoryYField: 'category',
      fill: root.interfaceColors.get('alternativeBackground')
    }));

    this.series1.columns.template.setAll({
      width: am5.p100,
      fillOpacity: 0.08,
      strokeOpacity: 0,
      cornerRadius: 20
    });

    this.series1.data.setAll(this.data);

    this.series2 = this.chart.series.push(am5radar.RadarColumnSeries.new(root, {
      xAxis,
      yAxis,
      clustered: false,
      valueXField: 'value',
      categoryYField: 'category'
    }));

    this.series2.columns.template.setAll({
      width: am5.p100,
      strokeOpacity: 0,
      tooltipText: '{category}: {valueX}€',
      cornerRadius: 20,
      templateField: 'columnSettings'
    });

    this.series2.data.setAll(this.data);

    // Animate chart and series in
    // https://www.amcharts.com/docs/v5/concepts/animations/#Initial_animation
    this.series1.appear(1000);
    this.series2.appear(1000);
    this.chart.appear(1000, 100);
  }
}
