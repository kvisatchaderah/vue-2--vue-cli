export default {
  // data
  data() {
    return {
      grafik_settings: { x_max: 5, y_max: 5, width: 700, height: 500 },
      context: null,
      grafik_settings_in_node: { x_max: 5, y_max: 5, width: 700, height: 500 },
      active_function: null,
      functions: [
        { title: 'X<sup>0.5</sup>', function: (a) => a ** 0.5 },
        { title: 'X<sup>1</sup>', function: (a) => a },
        { title: 'X<sup>2</sup>', function: (a) => a ** 2 },
        { title: 'X<sup>3</sup>', function: (a) => a ** 3 },
      ],
    }
  },

  // created
  created() {
    this.set_settings()
  },

  // mounted
  mounted() {
    this.init_canvas()
  },

  // methods
  methods: {
    // init
    init_canvas() {
      this.context = grids.getContext('2d')
    },
    set_settings() {
      this.grafik_settings = { ...this.grafik_settings_in_node }
    },
    start_grafik() {
      this.set_settings()
      this.paint_grids()
    },
    set_function(f) {
      this.active_function = { ...f }
    },
    new_function(f) {
      this.set_function(f)
      this.start_grafik()
    },

    // paint
    paint_grids() {
      // this.context.
    },
  },
}
