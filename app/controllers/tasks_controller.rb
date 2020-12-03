class TasksController < ApplicationController
  def index
    @text = '国境の長いトンネルを抜けると雪国であった。夜の底が白くなった。信号所に汽車が止まった。
　向側の座席から娘が立って来て、島村の前のガラス窓を落した。雪の冷気が流れこんだ。娘は窓いっぱいに乗り出して、遠くへ呼ぶように、
「駅長さあん、駅長さあん」
　明りをさげてゆっくり雪を踏んで来た男は、襟巻で鼻の上まで包み、耳に帽子の毛皮を垂れていた。'
  end

  def create
    task = Task.new(task_params)
    task.save!
    redirect_to tasks_url, notice: "タスク「#{task.name}」を登録しました。"

  end

  def show
  end

  def new
    @task = Task.new
  end

  def edit
  end

  private
  def task_params
    params.require(:task).permit(:name, :description)
  end
end
