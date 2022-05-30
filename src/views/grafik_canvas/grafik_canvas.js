export default {
  // data
  data() {
    return {
      settings: null,
      ctx: null,
      settings_in_node: { x_max: 5, y_max: 5, width: 500, height: 500 },
      active_function: null,
      functions: [
        { title: 'X<sup>0.5</sup>', function: (a) => a ** 0.5 },
        { title: '-X', function: (a) => -a },
        { title: 'X<sup>2</sup>', function: (a) => a ** 2 },
        { title: 'X<sup>3</sup>', function: (a) => a ** 3 },
      ],
    }
  },

  // computed
  computed: {
    grid_width() {
      return this.settings.width / (2 * this.settings.x_max)
    },
    grid_height() {
      return this.settings.height / (2 * this.settings.y_max)
    },
  },

  // created
  created() {
    this.set_settings()
  },

  // mounted
  mounted() {
    this.init_canvas()
    this.start_grafik()
  },

  // methods
  methods: {
    //
    // init
    //
    init_canvas() {
      this.ctx = grids.getContext('2d')
    },
    clear_canvas() {
      this.ctx.clearRect(0, 0, this.settings.width, this.settings.height)
    },

    set_function(f) {
      this.active_function = { ...f }
    },
    set_settings() {
      this.settings = { ...this.settings_in_node }
    },

    start_grafik() {
      this.clear_canvas()
      this.set_settings()
      this.paint_grids()
      this.paint_legend()
    },
    new_function(f) {
      this.set_function(f)
      this.clear_canvas()
    },

    //
    // paint helpers
    //
    set_stroke_style(val) {
      this.ctx.strokeStyle = `${val}`
    },
    set_null_ledge(num) {
      return num ? 6 : 0
    },

    // guide
    paint_guide_horizontal(num) {
      const null_ledge = this.set_null_ledge(num)

      this.ctx.beginPath()
      this.ctx.moveTo(
        null_ledge,
        this.settings.height / 2 + num * this.grid_height
      )
      this.ctx.lineTo(
        this.settings.width - null_ledge,
        this.settings.height / 2 + num * this.grid_height
      )
      this.ctx.stroke()
      this.ctx.closePath()
    },

    paint_guide_vertical(num) {
      const null_ledge = this.set_null_ledge(num)

      this.ctx.beginPath()
      this.ctx.moveTo(
        this.settings.width / 2 + num * this.grid_width,
        null_ledge
      )
      this.ctx.lineTo(
        this.settings.width / 2 + num * this.grid_width,
        this.settings.height - null_ledge
      )
      this.ctx.stroke()
      this.ctx.closePath()
    },

    // paint
    paint_grids() {
      this.set_stroke_style('#ffffff')
      this.paint_guide_horizontal(0)
      this.paint_guide_vertical(0)

      this.set_stroke_style('#cecece50')
      for (let i = 1; i < this.settings.y_max; i++) {
        this.paint_guide_horizontal(i)
        this.paint_guide_horizontal(-i)
      }
      for (let i = 1; i < this.settings.x_max; i++) {
        this.paint_guide_vertical(i)
        this.paint_guide_vertical(-i)
      }
    },

    paint_legend() {
      this.ctx.font = '12px Roboto'
      this.ctx.fillText = '0'
    },
  },
}
